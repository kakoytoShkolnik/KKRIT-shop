import { ObjectId } from 'mongodb'
import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import clientPromise from '@/lib/mongodb'
import { getAuthRouteData } from '@/lib/utils/api-routes'

export async function DELETE(req: Request) {
  try {
    const { db, validatedTokenResult } = await getAuthRouteData(
      clientPromise,
      req,
      false
    )

    if (validatedTokenResult.status !== 200) {
      return NextResponse.json(validatedTokenResult)
    }

    const id = req.url.split('id=')[1]

    await db.collection('users').deleteOne({ _id: new ObjectId(id) })
    
    const filenames = fs.readdirSync(
      path.join(process.cwd(), './public', 'avatars')
    )
    const existingImage = filenames.find((name) =>
      name.includes(new ObjectId(id).toString())
    )

    if (existingImage) {
      fs.unlinkSync(path.join(process.cwd(), 'public/avatars/' + existingImage))
    }


    return NextResponse.json({
      status: 204,
      id,
    })
  } catch (error) {
    throw new Error((error as Error).message)
  }
}