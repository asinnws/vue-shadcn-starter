import { vi } from 'vitest';

class MockPointerEvent extends MouseEvent {
  pointerId: number;
  width: number;
  height: number;
  pressure: number;
  tangentialPressure: number;
  tiltX: number;
  tiltY: number;
  twist: number;
  pointerType: string;
  isPrimary: boolean;

  constructor(type: string, props: PointerEventInit = {}) {
    super(type, props);
    this.pointerId = props.pointerId || 0;
    this.width = props.width || 1;
    this.height = props.height || 1;
    this.pressure = props.pressure || 0;
    this.tangentialPressure = props.tangentialPressure || 0;
    this.tiltX = props.tiltX || 0;
    this.tiltY = props.tiltY || 0;
    this.twist = props.twist || 0;
    this.pointerType = props.pointerType || 'mouse';
    this.isPrimary = props.isPrimary || true;
  }
}

// Mock the PointerEvent class on the window object
window.PointerEvent = MockPointerEvent as any;

// Mock necessary methods on HTMLElement prototype
window.HTMLElement.prototype.scrollIntoView = vi.fn();
window.HTMLElement.prototype.releasePointerCapture = vi.fn();
window.HTMLElement.prototype.hasPointerCapture = vi.fn();
