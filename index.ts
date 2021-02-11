function createClassName(names: any, def?: string): string {

    let result: string[] = [];

    Object.keys(names).map(key=> {

        if (names[key])
            result.push(key);

    });

    return [def, result.join(" ")].join(" ");

}

export default createClassName;