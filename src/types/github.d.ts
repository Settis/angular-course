type Owner = {
  id: number;
  login: string;
  avatar_url: string;
}

type Repo = {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  owner: Owner;
  created_at: string;
  updated_at: string;
}
