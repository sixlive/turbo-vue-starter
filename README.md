# TurboVue Starter

⚠️ _This is not meant to be a long term project, this is purely to jump start experimentation and protyping._

An opinionated starter based on https://reinink.ca/articles/server-side-apps-with-client-side-rendering. Installs all packages defined in [sixlive/laravel-preset](https://github.com/sixlive/laravel-preset).

Start your exploration by reviewing:
- `app/Providers/ViewServiceProvider`
- `routes/web.php`
- `resources/js/app.js`, 
- `resources/js/components/Welcome.vue`.

## Setup
```bash
> composer install
> yarn && yarn dev
```

## Usage
### Forms
```js
<template>
  <Layout title="Create a post">
    <app-form action="posts.store">
        <label>
            Post
            <textarea name="post_content"></message>
        </label>
    </app-form>
  </Layout>
</template>

<script>
    export default {}
</script>
```
