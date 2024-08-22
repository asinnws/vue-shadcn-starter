<template>
  <div>
    <header>
      <div class="container max-w-full">
        <h3 class="font-bold text-2xl text-blue-600 uppercase">{{ $t('common.greeting') }}</h3>
        <nav class="border-t-2 border-b-2">
          <RouterLink to="/" class="p-1 font-bold aria-[current='page']:text-green-600">
            {{ $t('common.links.home') }}
          </RouterLink>
          <RouterLink to="/about" class="p-1 font-bold aria-[current='page']:text-green-600">
            {{ $t('common.links.about') }}
          </RouterLink>
        </nav>
      </div>
    </header>
    <div>
      <RouterView />
    </div>
  </div>
</template>
