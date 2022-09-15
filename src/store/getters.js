import {
  UNIQUE_ORGANIZATIONS,
  UNIQUE_JOB_TYPES,
  FILTERED_JOBS,
  INCLUDE_JOBS_BY_ORGANIZATION,
  INCLUDE_JOB_BY_JOBTYPE,
} from "@/store/constants";
const getters = {
  [UNIQUE_ORGANIZATIONS](state) {
    const uniqueOrganizations = new Set();
    state.jobs.forEach((job) => uniqueOrganizations.add(job.organization));
    return uniqueOrganizations;
  },

  [UNIQUE_JOB_TYPES](state) {
    const uniqueType = new Set();
    state.jobs.forEach((type) => uniqueType.add(type.jobType));
    return uniqueType;
  },

  [INCLUDE_JOBS_BY_ORGANIZATION]: (state) => (job) => {
    if (state.selectedOrganizations.length === 0) return true;
    return state.selectedOrganizations.includes(job.organization);
  },
  [INCLUDE_JOB_BY_JOBTYPE]: (state) => (job) => {
    if (state.selectedJobTypes.length === 0) return state.jobs;
    return state.selectedJobTypes.includes(job.jobType);
  },

  [FILTERED_JOBS](state, getters) {
    return state.jobs
      .filter((job) => getters.INCLUDE_JOBS_BY_ORGANIZATION(job))
      .filter((job) => getters.INCLUDE_JOB_BY_JOBTYPE(job));
  },
};
export default getters;
