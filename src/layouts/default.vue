<template>
  <div>
    <header>
      <div class="container max-w-full flex gap-4 py-4 items-center">
        <h3 class="font-bold text-2xl text-blue-600 uppercase">{{ $t('common.greeting') }}</h3>
        <nav class="border-2 p-2">
          <ul class="flex">
            <li>
              <RouterLink to="/" class="p-1 font-bold aria-[current='page']:text-green-600">
                {{ $t('common.links.home') }}
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/about" class="p-1 font-bold aria-[current='page']:text-green-600">
                {{ $t('common.links.about') }}
              </RouterLink>
            </li>
          </ul>
        </nav>
        <Label for="language-select">{{ $t('common.actions.choose_language') + ':' }}</Label>
        <Select v-model="localeModel">
          <SelectTrigger class="w-[180px]" id="language-select">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem v-for="lang in LOCALES" :key="lang" :value="lang">
              {{ $t(`common.locales.${lang}`) }}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </header>
    <div>
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLocaleTranslations } from '@/composables/use-locale-translations';
import { LOCALES, setPersistedLocale } from '@/lib/locale';
import { watch } from 'vue';

const localeModel = useLocaleTranslations();

watch(
  () => localeModel.value,
  (newLocale) => {
    setPersistedLocale(newLocale);
  }
);
</script>
