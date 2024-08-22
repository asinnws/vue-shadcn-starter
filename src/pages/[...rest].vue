<template>
  <section class="text-center pt-6">
    <h1 class="text-4xl font-bold">{{ $t('pages.not_found.title') }}</h1>
    <p class="text-lg mt-2">{{ $t('pages.not_found.description') }}</p>
    <Button as-child variant="link">
      <RouterLink to="/" class="underline">{{ $t('pages.not_found.actions.go_home') }}</RouterLink>
    </Button>
  </section>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button';
</script>

<route lang="yaml">
meta:
  layout: 404
</route>
