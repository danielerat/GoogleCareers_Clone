import {
  UNIQUE_ORGANIZATIONS,
  UNIQUE_JOB_TYPES,
  FILTERED_JOBS,
  INCLUDE_JOBS_BY_ORGANIZATION,
  INCLUDE_JOB_BY_JOBTYPE,
} from "@/store/constants";

import { GlobalState } from "@/store/types";
import { Job } from "@/api/types";

interface IncludeJobGetters {
  INCLUDE_JOBS_BY_ORGANIZATION: (job: Job) => boolean;
  INCLUDE_JOB_BY_JOBTYPE: (job: Job) => boolean;
}

const getters = {
  [UNIQUE_ORGANIZATIONS](state: GlobalState) {
    const uniqueOrganizations = new Set<string>();
    state.jobs.forEach((job) => uniqueOrganizations.add(job.organization));
    return uniqueOrganizations;
  },

  [UNIQUE_JOB_TYPES](state: GlobalState) {
    const uniqueType = new Set<string>();
    state.jobs.forEach((type) => uniqueType.add(type.jobType));
    return uniqueType;
  },

  [INCLUDE_JOBS_BY_ORGANIZATION]: (state: GlobalState) => (job: Job) => {
    if (state.selectedOrganizations.length === 0) return true;
    return state.selectedOrganizations.includes(job.organization);
  },
  [INCLUDE_JOB_BY_JOBTYPE]: (state: GlobalState) => (job: Job) => {
    if (state.selectedJobTypes.length === 0) return state.jobs;
    return state.selectedJobTypes.includes(job.jobType);
  },

  [FILTERED_JOBS](state: GlobalState, getters: IncludeJobGetters) {
    return state.jobs
      .filter((job) => getters.INCLUDE_JOBS_BY_ORGANIZATION(job))
      .filter((job) => getters.INCLUDE_JOB_BY_JOBTYPE(job));
  },
};
export default getters;
