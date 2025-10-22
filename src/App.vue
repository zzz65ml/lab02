<template>
  <div id="app">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink> |
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header>
-    <h1>Events For Good</h1>
-    <!-- new element -->
    <RouterView />
  </div>
</template>

