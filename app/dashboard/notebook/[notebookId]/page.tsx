import PageWrapper from '@/components/page-wrapper'
import React from 'react'
import { getNotebooksById } from '@/server/notebooks'

export default async function NotePage({params}:{params:{notebookId:string}}){
    const {notebookId} = params
    const {notebook} = await getNotebooksById(notebookId)

    return <PageWrapper breadcrumbs= {[
        {label: "Dashboard", href:"/dashboard"},
        {label: notebook?.name ?? "Notebook", href: `/dashboard/notebook/${notebook}`},
    ]}>
        {notebook?.name}
    </PageWrapper>


}
