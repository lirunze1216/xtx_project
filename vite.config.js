import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// icon图标
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
// postcss-px-to-viewport
import pxtovw from 'postcss-px-to-viewport'
// elementPlus
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const my_pxtovw = pxtovw({
  unitToConvert: 'px', // 需要转换的单位，默认为"px"
  viewportWidth: 1920, // 设计稿的视口宽度
  unitPrecision: 6, // 单位转换后保留的精度
  propList: ['*'], // 能转化为vw的属性列表
  viewportUnit: 'vw', // 希望使用的视口单位
  fontViewportUnit: 'vw', // 字体使用的视口单位
  selectorBlackList: ['ignore'], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
  minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
  mediaQuery: true, // 媒体查询里的单位是否需要转换单位
  replace: false, //  是否直接更换属性值，而不添加备用属性
  exclude: [/node_modules/], // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
  include: undefined, // 如果设置了include，那将只有匹配到的文件才会被转换
  landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
  landscapeUnit: 'vw', // 横屏时使用的单位
  landscapeWidth: 1920, // 横屏时使用的视口宽度
})
const pathSrc = path.resolve(__dirname, 'src')
export default defineConfig({
  resolve: {
    alias: {
      '@': pathSrc,
    },
  },
  plugins: [
    vue(),
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue'],

      resolvers: [
        // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
        ElementPlusResolver(),
        // 自动导入图标组件
        IconsResolver(),
      ],
      // dts: path.resolve(pathSrc, 'auto-imports.d.ts')
    }),
    Components({
      resolvers: [
        // 自动导入 Element Plus 组件
        ElementPlusResolver(),
        // 自动注册图标组件
        IconsResolver(),
      ],
      // dts: path.resolve(pathSrc, 'components.d.ts'),
    }),
    Icons({
      scale: 1,
      defaultClass: 'inline-block',
      autoInstall: true,
    }),
  ],
  css: {
    postcss: {
      plugins: [my_pxtovw],
    },
  },
})
