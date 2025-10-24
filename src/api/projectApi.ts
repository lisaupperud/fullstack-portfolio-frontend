import { apiRequest } from "./apiClient"
import type { Project } from "../Project"

/*
    uses apiRequest to make a GET request to the backend /projects endpoint
    returns them as type Project[]
*/

// fetch all projects
export const fetchProjects = async (): Promise<Project[]> => {
  return await apiRequest<Project[]>("/projects", "GET")
}
