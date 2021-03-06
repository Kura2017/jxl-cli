"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CliQuestions = [
    {
        type: 'list',
        name: 'template',
        message: 'Please choose the template type:',
        choices: [
            {
                key: 'react',
                name: 'react template',
                value: 'react'
            },
            {
                key: 'react-ts',
                name: 'react typeScript template',
                value: 'react-ts'
            },
            {
                key: 'react-lib',
                name: 'react library template',
                value: 'react-lib'
            },
            {
                key: 'react-ui',
                name: 'react ui template',
                value: 'react-ui'
            },
            {
                key: 'react-vite',
                name: 'react vite template',
                value: 'react-vite'
            },
            {
                key: 'egg',
                name: 'egg template',
                value: 'egg'
            },
        ]
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter the project description:',
        default: 'cli template'
    },
    {
        type: 'input',
        name: 'author',
        message: 'Please enter the author name:',
        default: 'jiangxinlei'
    },
    {
        type: 'confirm',
        name: 'isInstall',
        message: '是否安装依赖？',
        suffix: '(默认 Yes)'
    }
];
exports.CliQuestions = CliQuestions;
