
import 'ts-jest/utils'

import { braceOpen, braceClose, colon } from '../../../types/Tokens/literals'
import { BraceOpen, BraceClose, Colon } from '../../../types/Tokens'
import { switchSingleton } from './switchSingleton'

test('braceOpen returns a BraceOpen singleton', () => {
  expect(switchSingleton(braceOpen, 1, 1)).toEqual(new BraceOpen(1, 1))
})

test('braceClose returns a BraceClose singleton', () => {
  expect(switchSingleton(braceClose, 1, 1)).toEqual(new BraceClose(1, 1))
})

test('colon returns a Colon singleton', () => {
  expect(switchSingleton(colon, 1, 1)).toEqual(new Colon(1, 1))
})