// import {Meta , StoryObj} from '@testing-library/react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import TextInput from '../Component/TextInput'

const meta:Meta<typeof TextInput>={
    component:TextInput,
    title:'UI textInput',
}
export default meta;

export const FristComponent :StoryObj<typeof TextInput>={
    args:{
        lable : 'Name'
    }
}