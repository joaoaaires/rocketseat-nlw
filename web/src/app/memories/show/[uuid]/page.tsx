import { UpdateMemoryForm } from '@/components/UpdateMemoryForm'
import { api } from '@/lib/api'
import { ChevronLeft } from 'lucide-react'
import { cookies } from 'next/headers'
import Link from 'next/link'

interface DetailMemoryProps {
  uuid: string
}

interface Memory {
  id: string
  coverUrl: string
  content: string
  createAt: string
  isPublic: boolean
}

export default async function DetailMemory({
  params,
}: {
  params: DetailMemoryProps
}) {
  const token = cookies().get('token')?.value
  const response = await api.get(`/memories/${params.uuid}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const memory: Memory = response.data

  console.log(memory)

  return (
    <div className="flex flex-1 flex-col gap-4 p-16">
      <Link
        href="/"
        className="flex items-center gap-1 text-sm text-gray-200 transition-colors hover:text-gray-100"
      >
        <ChevronLeft className="h-4 w-4" />
        voltar à timeline
      </Link>

      <UpdateMemoryForm memory={memory} />
    </div>
  )
}
