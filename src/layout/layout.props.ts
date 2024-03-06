import { CategoryType } from '@/interfaces/category.interface'
import {ReactNode} from 'react'

export interface LayoutProps{
    children: ReactNode
    categories: CategoryType[]
}