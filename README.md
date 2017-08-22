# vue-loader-decorator-syntax-issue

Trying to use decorators in a typescript project using Vue, Vue components & Webpack. Compilation fails with the following error...

```
ERROR in ./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/App.vue
Module parse failed: <<path>>\node_modules\vue-loader\lib\selector.js?type=script&index=0!<<path>>\src\App.vue Unexpected character '@' (11:0)
You may need an appropriate loader to handle this file type.
| import Component from "vue-class-component";
|
| @Component({
|
| })
 @ ./src/App.vue 4:0-101
 @ ./src/index.ts
 ```
