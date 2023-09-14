import { useCallback } from 'react'

import { trpc } from 'app/utils/trpc'

import useUppy from 'app/hooks/useUppy'

type UseProjectImageUploadOptions = {
  callbacks: {
    onSuccess: (data: object) => void,
  },
  projectId: string,
}

function useProjectImageUpload(options: UseProjectImageUploadOptions) {
  const { callbacks: { onSuccess }, projectId } = options

  // Create ProjectsImage Mutation
  const createProjectsImageMutation = trpc.projectsImages.createProjectsImage.useMutation({
    onSuccess,
  })

  const { mutate } = createProjectsImageMutation

  const uploadSuccess = useCallback((file) => {
    const params = {
      projectId,
      image: {
        fileKey: file?.meta?.fileKey,
        filename: file?.meta?.filename,
        height: file?.meta?.height,
        id: file?.meta?.fileId,
        originalFilename: file?.meta?.originalFilename,
        width: file?.meta?.width,
      },
    }

    mutate(params)

    return params
  }, [projectId, mutate])

  const uppy = useUppy(
    {
      callbacks: {
        uploadSuccess,
      },
    },
    [projectId],
  )

  return {
    uppy,
  }
}

export default useProjectImageUpload
