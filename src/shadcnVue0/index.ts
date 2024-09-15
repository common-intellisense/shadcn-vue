import { getComponentMap, getPropsMap } from './mapping'

export function shadcnVue0() {
  return {
    uiName: 'shadcn-vue0',
    map: getPropsMap(),
    lib: 'shadcn-vue',
  }
}

export function shadcnVue0Components() {
  return {
    map: getComponentMap(),
    isSeperatorByHyphen: false,
    prefix: '',
    lib: 'shadcn-vue',
  }
}
