import axios, { type AxiosResponse } from "axios"

/*  apiClient.ts
       middlehand between UI and API.
       uses Axios to speak to the backend
*/

// create instance of Axios with default config

/*const apiClient = axios.create({
  baseURL: "http://localhost:8080/api/v1", 
  headers: { "Content-Type": "application/json" },
  timeout: 10000,
})*/

const apiClient = axios.create({
  baseURL: "https://fullstack-portfolio-backend-tbnd.onrender.com/api/v1",
  headers: { "Content-Type": "application/json" },
  timeout: 10000,
})

// define a generic API function
// <T> == function is generic -> can be reused with different data types

export const apiRequest = async <T>(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  data?: any
): Promise<T> => {
  const response: AxiosResponse<T> = await apiClient({
    method,
    url,
    data,
  })

  return response.data
}

/*interface Project {
    id: string;
    name: string;
    description: string;
    link: string;
    tags: string[];
    iconKey: string;
}

interface ProjectListResponse {
    projects: Project[];
}

export const fetchProjects = async (): Promise<ProjectListResponse> => {
    return await apiRequest<ProjectListResponse>('/projects', 'GET');
}*/
