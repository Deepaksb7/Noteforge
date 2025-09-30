"use server"

import { db } from "@/db/drizzle"
import { InsertNote, InsertNotebook, notebooks, notes } from "@/db/schema"
import { auth } from "@/lib/auth"
import { eq } from "drizzle-orm"
import { headers } from "next/headers"

export const createNote = async (values: InsertNote) =>{
    try {
        await db.insert(notes).values(
           values
        )
        return {success:true , message:"Notebook created successfully"}
    } catch (error) {
        return {success:false , message:"Failed to create notebook"}
    }
}

export const getNoteById = async (id: string) => {
    try {
        const note = await db.query.notes.findFirst({
            where: eq(notes.id, id),
            with: {
                notebook: true
            }
        });

        return { success: true, note };
    } catch {
        return { success: false, message: "Failed to get notebook" };
    }
};

export const updateNote = async (id:string , values:Partial<InsertNote>)=>{
    try {
        await db.update(notes).set(values).where(eq(notes.id , id))
        return {success:true , message:"Notebook updated successfully"}
    } catch (error) {
        return {success:false , message:"Failed to update notebook"}
    }
}

export const deleteNotebook = async (id:string)=>{
    try {
        await db.delete(notes).where(eq(notes.id , id))
        return {success:true , message:"Notebook deleted successfully"}
    } catch (error) {
        return {success:false , message:"Failed to delete notebook"}
    }
}