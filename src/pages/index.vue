<template>
  <main>
    <h1 class="text-4xl font-bold uppercase">{{ $t('pages.home.title') }}</h1>
    <div class="mt-4 flex gap-2 justify-center items-center">
      <Button @click="counter.decrement()">-</Button>
      <span>{{ counter.count }}</span>
      <Button @click="counter.increment()">+</Button>
    </div>
  </main>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { useCounterStore } from '@/stores/counter';

const counter = useCounterStore();
</script>
