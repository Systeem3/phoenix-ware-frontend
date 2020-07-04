import api from '@/services/api'

export default {
  getActivities(id) {
    return api.get(`/process/${id}/listar_actividades/`)
  },
  getActivitie2(id, categoria) {
    return api.get(
      `/projects/${id}/listar_procesos_categoria/?categoria=${categoria}`
    )
  },
}
