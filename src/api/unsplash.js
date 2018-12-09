import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID b72802e56203e894db75d5b36b409685de6c79d539ba625725cdfc5ad9231bde'
  },
  params: {
    per_page: 20
  }
})
