import PageWrapper from '@/components/page-wrapper'
import RichTextEditor from '@/components/text-editor'
import { getNoteById } from '@/server/notes'
import React from 'react'
import type { JSONContent } from '@tiptap/react'

export default async function NotePage({params}:{params:{noteId:string}}){
    const { noteId } = params
    const {note} = await getNoteById(noteId)

    return <PageWrapper breadcrumbs= {[
        {label: "Dashboard", href:"/dashboard"},
        {label: note?.notebook?.name ?? "Notebook", href: `/dashboard/notebook/${note?.notebook?.id}`},
        {label: note?.title ?? "Note", href: `/dashboard/note/${noteId}`},
    ]}>
        {note?.title}
        <RichTextEditor content={note?.content as JSONContent[]}  noteId={noteId}/>
    </PageWrapper>


}
