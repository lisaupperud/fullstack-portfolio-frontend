import { apiRequest } from "../api/apiClient"

// interface for project data
export interface Project {
  id: string
  name: string
  desc: string
  link: string[]
  tags: string[]
  iconKey: string
}

// function to fetch all projects

export const fetchProjects = async (): Promise<Project[]> => {
  return await apiRequest<Project[]>("/projects/", "GET")
}
