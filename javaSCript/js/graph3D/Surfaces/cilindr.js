Surfaces.prototype.hyperbolicCylinder = (count = 16, R = 10) =>{

    const points = [];
    const edges = [];
    const polygons = [];

    delta = Math.PI  / count;
    
    for(let i = 0; i < Math.PI ; i += delta)  {
        for(let j = 0; j < Math.PI ; j += delta) {
            const x = R * Math.cos(i);
            const y = R * Math.sin(j);
            const z = 0;
            points.push(new Point(x, y, z));
        }
    }

   

    return new Subject(points, edges, polygons);
}