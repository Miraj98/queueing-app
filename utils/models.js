export const models = [
    {
        id: 1,
        name: 'M | M | 1',
        subtitle: ['First-come-first-served', 'Infinite queue length', 'Infinite prospective customers']
    },
    {
        id: 2,
        name: 'M | M | 1',
        subtitle: ['First-come-first-served', 'Finite queue length', 'Infinite prospective customers']
    },
    {
        id: 3,
        name: 'M | M | s',
        subtitle: ['First-come-first-served', 'Infinite queue length', 'Infinite prospective customers']
    },
    {
        id: 4,
        name: 'M | M | s',
        subtitle: ['First-come-first-served', 'Finite queue length', 'Infinite prospective customers']
    },
    {
        id: 5,
        name: 'M | M | s',
        subtitle: ['First-come-first-served', 'K number of machines', '']
    },
    {
        id: 6,
        name: 'M | M | n',
        subtitle: ['First-come-first-served', 'Infinite queue length', 'Infinite prospective customers']
    }
]

export const modelDataById = {
    1: {
        name: 'M | M | 1',
        description: 'Single server model with Poisson input and exponential service. The service discipline is assumed to be first-come-first-served. Further, the mean arrival rate and the mean service rate are assumed to be constants λ and 𝛍 respectively.'
    },
    2: {
        name: 'M | M | 1',
        description: 'At most m customers are allowed in the system (i.e. at most m-1 customers are allowed in the queue). When there are m customers in the system, an arriving customers is not allowed to join the system and is lost as a customer.'
    },
    3: {
        name: 'M | M | s',
        description: 'The inter arrival times are independent exponential variates with parameter λ. The service time for each server is exponential with parameter 𝛍.  The individual service times are mutually independent among the servers as well as customers. Average service rate per server is 𝛍. The number of servers is s, working in parallel.'
    },
    4: {
        name: 'M | M | s',
        description: 'The assumptions are the same as in model 3 except that the system cannot hold more than ‘m’ customers. When the system has ‘m’ customers, then an arriving customer does not enter the system and is lost as a customer I.e. ceases to be a customer for the system. We assume that the  arrivals are in a Poisson process with a rate λ.'
    },
    5: {
        name: 'M | M | s',
        description: "Suppose that a firm has K machines and has ’s’ repairmen working in parallel to repair the machine which breakdown, s is less than K. Suppose that the time until breakdown of a machine has an exponential distribution with parameter λ, and that the machines functions independently. The service-time of each machine is exponentially distributed with parameter 𝛍 and is the same for each repairman. The service-times are independent for repairman as well as for machine."
    },
    6: {
        name: 'M | M | n',
        description: 'Arrivals are in the Poisson process with a mean rate λ, service times are independent exponentially distributed random variables each with parameter 𝛍. The number of servers is infinite.'
    }
}