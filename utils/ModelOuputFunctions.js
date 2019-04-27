const factorial = n => {
    if(n === 0 || n === 1) {
        return 1
    } else {
        return n*factorial(n-1)
    }
}

const summation = (func, lower, upper) => {
    if(upper === lower) {
        return func(upper)
    } else {
        return func(lower) + summation(func, lower + 1, upper)
    }
}

const combination = (n, r) => {
    return factorial(n)/(factorial(r)*factorial(n-r))
}

const id1 = (lambda, mu) => {
    const L = lambda/(mu - lambda)
    const Lq = (lambda*lambda)/(mu*(mu - lambda))
    const W = 1/(mu - lambda)
    const Wq = lambda/(mu*(mu - lambda))
    const Po = 1 - (lambda/mu)

    return [L, Lq, W, Wq, Po]
}

const id2 = (lambda, mu, m) => {
    const p = lambda/mu
    const pm = Math.pow(p, m)*(1-p)/(1-Math.pow(p, m+1))
    let L
    let W
    if(lambda !== mu) {
        L = (p/(1-p)) - ((m+1)*Math.pow(p,m+1)/(1-Math.pow(p, m+1)))
        W = L/(lambda*(1-pm))
    } else {
        L = m/2
        W = (m+1)/(2*lambda)
    }
    const Lq = L - p*(1-pm)
    const Wq = W - (1/mu)
    let Po
    if(lambda !== mu) {
        Po = (1-p)/(1-Math.pow(p, m+1))
    } else {
        Po = 1/(m+1)
    }


    return [L, Lq, W, Wq, Po]
}

const id3 = (lambda, mu, s) => {
    if(lambda/mu >= s) {
        console.log('Invalid')
        return ['invalid', 'invalid', 'invalid', 'invalid']
    } else {
        const P = lambda/mu
        console.log("P: ", P)
        const sequence = n => Math.pow(P, n)/factorial(n)
        const sum = summation(sequence, 0, s-1)
        const term1 = Math.pow(P,s)/(factorial(s)*(1-(P/s)))
        console.log(term1)
        const Po = 1/(term1 + sum)
        console.log("Po: ", Po)
        const Lq = (Po*lambda*mu*s*Math.pow(P,s))/(factorial(s)*((mu*s)-(lambda))*((mu*s)-(lambda)))
        console.log("Lq: ", Lq)
        const L = Lq + P
        const W = L/lambda
        const Wq = Lq/lambda
        return [L, Lq, W, Wq, Po]
    }
}

const id4 = (lambda, mu, m, s) => {
    if(m < s) {
        console.log("Invalid")
        return ['invalid', 'invalid', 'invalid', 'invalid']
    } else {
        const P = lambda/mu
        console.log("P: ", P)
        const sequence = n => Math.pow(P,n)/factorial(n)
        const sum = summation(sequence, 1, s-1)
        console.log(sum)
        let Po
        if(P !== s) {
            const term1 = (Math.pow(P,s)*(1-Math.pow(P/s, m-s+1)))/(factorial(s)*(1-P/s))
            const term2 = sum
            console.log("Term 1 & Term 2: ", term1, term2)
            Po = 1/(1 + term1 + term2)
        } else {
            const _term1 = (Math.pow(s,s)*(m-s+1))/(factorial(s))
            const _term2 = sum
            Po = 1/(1 + _term1 + _term2)
        }
        // const Po = (P !== s)
        //     ? 1/(1 + (Math.pow(P,s)*(1 - Math.pow(P/s, m-s+1))/(factorial(s)*(1 - (P/s)))) + sum)
        //     : 1/(1 + (Math.pow(s,s)*(m-s+1)/factorial(s)) + sum)
        console.log("Po: ", Po)
        const funcP = n => {
            if(n <= s-1) {
                return (Math.pow(P,n)*Po)/factorial(n)
            } else if(n <= m) {
                console.log("This is called")
                return (Math.pow(P,n)*Po)/(factorial(s)*Math.pow(s, n-s))
            } else {
                return 0
            }
        }
        const sequence2 = n => (n-s)*funcP(n)
        const Lq = P !== s ? summation(sequence2, s+1, m) : (Math.pow(s,s)*(m-s)*(m-s+1)*Po)/(2*factorial(s))
        const L = Lq + (1 - funcP(m))*P
        console.log("L: ", L)
        const Wq = Lq/(lambda*(1-funcP(m)))
        const W = Wq + 1/mu
        return [L, Lq, W, Wq, Po]
    }
}

const id5 = (lambda, mu, s, K) => {
    if(s > K) {
        return ['invalid', 'invalid', 'invalid', 'invalid']
    } else {
        const P = lambda/mu
        const sequence1 = n => combination(K, n)*Math.pow(P,n)
        const sequence2 = n => (factorial(K)*Math.pow(P,n))/(factorial(K-n)*factorial(s)*Math.pow(s,n-s))
        const sum1 = summation(sequence1, 0, s-1)
        const sum2 = summation(sequence2, s, K)
        console.log("Sum1: ", sum1)
        console.log("Sum2: ", sum2)
        const sum = sum1 + sum2
        const Po = 1/sum

        const funcP = n => {
            if(n <= s-1) {
                return combination(K,n)*Math.pow(P,n)*Po
            } else if(n <= K) {
                return factorial(K)/(factorial(K)*factorial(s)*Math.pow(s,n-s))
            } else {
                return 0
            }
        }
        const sequence3 = n => (n-s)*funcP(n)
        const Lq = summation(sequence3, s+1, K)
        const L = (P*K + Lq)/(1 + P)
        const Wq = Lq/(lambda*(K-L))
        const W = Wq + 1/mu
        return [L, Lq, W, Wq, Po]
    }
}

const id6 = (lambda, mu) => [lambda/mu, 0, 1/mu, 0, Math.pow(2.7182, -(lambda/mu))]

const ModelOutputs = {
    1: id1,
    2: id2,
    3: id3,
    4: id4,
    5: id5,
    6: id6
}

export default ModelOutputs