import PageWrapper from '@/components/page-wrapper'
import React from 'react'
import { getNotebooksById } from '@/server/notebooks'
import NoteCard from '@/components/note-card'
import { CreateNoteButton } from '@/components/create-note-button'

export default async function NotePage({params}:{params:{notebookId:string}}){
    const {notebookId} = params
    const {notebook} = await getNotebooksById(notebookId)

    return <PageWrapper breadcrumbs= {[
        {label: "Dashboard", href:"/dashboard"},
        {label: notebook?.name ?? "Notebook", href: `/dashboard/notebook/${notebook}`},
    ]}>
        <h1>
        {notebook?.name}
        </h1>

        <CreateNoteButton notebookId={notebookId}/>

        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {
                notebook?.notes?.map((note)=>(
                    <NoteCard key={note.id} note={note} />
                ))
            }
        </div>

    </PageWrapper>


}
