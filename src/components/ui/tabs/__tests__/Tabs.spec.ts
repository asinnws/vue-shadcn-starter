import { mount } from '@vue/test-utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../.';
import { beforeAll, describe, expect, it } from 'vitest';
import { h } from 'vue';

function createTabs(tabs: Array<string>) {
  return mount(Tabs, {
    props: { defaultValue: tabs[0] },
    slots: {
      default: () => [
        h(TabsList, {}, () => tabs.map((value) => h(TabsTrigger, { value }, { default: () => value }))),
        ...tabs.map((value) => h(TabsContent, { value }, { default: () => `${value} tab content` }))
      ]
    }
  });
}

describe('Tabs.vue', () => {
  let wrapper: ReturnType<typeof createTabs>;
  const tabsValues = ['first', 'second'];

  beforeAll(() => {
    wrapper = createTabs(tabsValues);
  });

  describe('Render', () => {
    it('should render tablist', () => {
      expect(wrapper.find('[role="tablist"]')).toBeDefined();
    });

    it('should render tab buttons', () => {
      const tabButtons = wrapper.findAll('[role="tab"]');
      expect(tabButtons.length).toBe(tabsValues.length);
    });

    it('should render active tab content', () => {
      const activeTabButton = wrapper.find('[role="tab"][aria-selected="true"]');

      const tabPanelId = activeTabButton.attributes('aria-controls');
      const tabPanel = wrapper.find(`#${tabPanelId}`);

      expect(tabPanel.attributes('data-state')).toBe('active');
    });

    it('should hide inactive tabs content', () => {
      const activeTabButton = wrapper.find('[role="tab"][aria-selected="true"]');

      const activeTabPanelId = activeTabButton.attributes('aria-controls');

      const tabPanels = wrapper.findAll('[role="tabpanel"]');
      const inactiveTabPanels = tabPanels.filter((t) => t.element.id !== activeTabPanelId);

      expect(inactiveTabPanels.length).toBe(tabsValues.length - 1);

      inactiveTabPanels.forEach((panel) => {
        expect(panel.attributes('hidden')).toBe('');
      });
    });
  });

  describe('Change', () => {
    it('should select other tab on click', async () => {
      const inactiveTabButton = wrapper.find('[role="tab"][aria-selected="false"]');

      await inactiveTabButton.trigger('mousedown');

      const newActivePanelId = inactiveTabButton.attributes('aria-controls');
      const newActiveTabPanel = wrapper.find(`#${newActivePanelId}`);

      expect(newActiveTabPanel.attributes()).not.toContain('hidden');
      expect(newActiveTabPanel.attributes('data-state')).toBe('active');
    });

    it('should hide current active tab on clicking on the other tab', async () => {
      const activeTabButton = wrapper.find('[role="tab"][data-state="active"]');
      const inactiveTabButton = wrapper.find('[role="tab"][data-state="inactive"]');

      await inactiveTabButton.trigger('mousedown');

      const previousActivePanelId = activeTabButton.attributes('aria-controls');
      const previousActiveTabPanel = wrapper.find(`#${previousActivePanelId}`);

      expect(previousActiveTabPanel.attributes('hidden')).toBe('');
      expect(previousActiveTabPanel.attributes('data-state')).toBe('inactive');
    });
  });
});
