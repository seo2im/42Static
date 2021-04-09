export interface tUser {
    id: number
    email: string
    login: string
    first_name: string
    last_name: string
    usual_first_name: any
    url: string
    phone: string
    displayname: string
    usual_full_name: string
    image_url: string
    "staff?": boolean
    correction_point: number
    pool_month: string
    pool_year: string
    location: any
    wallet: number
    anonymize_date: string
    groups: any[]
    cursus_users: CursusUser[]
    projects_users: ProjectsUser[]
    languages_users: LanguagesUser[]
    achievements: Achievement[]
    titles: any[]
    titles_users: any[]
    partnerships: any[]
    patroned: any[]
    patroning: any[]
    expertises_users: any[]
    roles: any[]
    campus: Campu[]
    campus_users: CampusUser[]
  }
  
  export interface CursusUser {
    grade?: string
    level: number
    skills: Skill[]
    blackholed_at?: string
    id: number
    begin_at: string
    end_at?: string
    cursus_id: number
    has_coalition: boolean
    user: User
    cursus: Cursus
  }
  
  export interface Skill {
    id: number
    name: string
    level: number
  }
  
  export interface User {
    id: number
    login: string
    url: string
  }
  
  export interface Cursus {
    id: number
    created_at: string
    name: string
    slug: string
  }
  
  export interface ProjectsUser {
    id: number
    occurrence: number
    final_mark?: number
    status: string
    "validated?"?: boolean
    current_team_id: number
    project: Project
    cursus_ids: number[]
    marked_at?: string
    marked: boolean
    retriable_at?: string
  }
  
  export interface Project {
    id: number
    name: string
    slug: string
    parent_id: any
  }
  
  export interface LanguagesUser {
    id: number
    language_id: number
    user_id: number
    position: number
    created_at: string
  }
  
  export interface Achievement {
    id: number
    name: string
    description: string
    tier: string
    kind: string
    visible: boolean
    image: string
    nbr_of_success?: number
    users_url: string
  }
  
  export interface Campu {
    id: number
    name: string
    time_zone: string
    language: Language
    users_count: number
    vogsphere_id: number
    country: string
    address: string
    zip: string
    city: string
    website: string
    facebook: string
    twitter: string
    active: boolean
    email_extension: string
    default_hidden_phone: boolean
  }
  
  export interface Language {
    id: number
    name: string
    identifier: string
    created_at: string
    updated_at: string
  }
  
  export interface CampusUser {
    id: number
    user_id: number
    campus_id: number
    is_primary: boolean
  }
  