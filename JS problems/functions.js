// The factorial arrow function
const factorial = n =>
{
    let result = 1;
    for (let i = 1; i <= n; ++i)
        result *= i;
    return result;
}

/*const recursiveFactorial = n =>
{
    if (n ==1 )
        return 1;
    retrun n * recursiveFactorial(n-1);
}*/

// Function printing *s on each line
const stars = n =>
{
    for (let i = 0; i <= n; ++i)
    {
        let line = '';
        for (let k = 0; k < i; ++k)
            line += '*';
        alert(line);  
    }
}

// Function printing -s and *s on each line
const dashesAndStars = n =>
{
    for (let i = 0; i <= n; ++i)
    {
        let line = '';
        for (let k = 0; k < n - i; ++k)
            line += '-';
        for (let j = 0; j <= i; ++j)
                line += '*';
        alert(line); 
    }
}

// Average of array arrow function
const avg = arr =>
{
    let sum = 0;
    for (let index = 0; index < arr.length; ++index)
        sum += parseInt(arr[index]);
    return sum / arr.length;
}

/* const sumOfArray = arr =>
{
    let result = 0;
    for (let i = 0; index < arr.length; ++i)
        result += parseInt(arr[i]);
    return result;
}

const avgOfArray = arr =>
{
    const sum = sumOfArray(arr);
    return sum / arr.length;
}

const sumOfArrayForEach = arr =>
{
    let result = 0;
    arr.forEach(element => {result += element;})
    return result;
}*/

const a = prompt('Hi, please enter a number here');
alert(factorial(a));

const b = prompt('Hi, please enter a number here');
stars(b);

const c = prompt('Hi, please enter a number here');
dashesAndStars(c);

const inputArr = [];
const size = 10;

for (let i = 0; i < size; ++i)
    inputArr[i] = prompt('Hi, please enter the sequence element '  + (i + 1) + ' here');
alert(avg(inputArr));