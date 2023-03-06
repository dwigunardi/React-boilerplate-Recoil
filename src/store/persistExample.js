import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const persistCounter = atom({
  key: 'persist-count',
  default: 0,
  effects_UNSTABLE: [persistAtom],
})