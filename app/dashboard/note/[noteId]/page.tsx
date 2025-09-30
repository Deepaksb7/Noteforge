import PageWrapper from '@/components/page-wrapper'
import RichTextEditor from '@/components/text-editor'
import { getNoteById } from '@/server/notes'
import React from 'react'

export default async function NotePage({params}:{params:{noteId:string}}){
    const {noteId} = params
    const {note} = await getNoteById(noteId)

    return <PageWrapper breadcrumbs= {[
        {label: "Dashboard", href:"/dashboard"},
        {label: note?.[0]?.title ?? "Note", href: `/dashboard/note/${noteId}`},
    ]}>
        {note?.[0]?.title}
        <RichTextEditor />
    </PageWrapper>


}
