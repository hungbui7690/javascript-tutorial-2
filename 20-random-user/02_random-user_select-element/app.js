/*
    https://randomuser.me/
    https://randomuser.me/api/
    https://randomuser.me/api/?gender=female
    https://randomuser.me/api/?password=upper,lower,1-16

    # bài này sử dụng data-label
*/

import getElement from './utils/getElement.js'

const URL = 'https://randomuser.me/api/'

const img = getElement('.user-img')
const title = getElement('.user-title')
const value = getElement('.user-value')

const btns = [...document.querySelectorAll('.icon')]
