# Fitness API 
An API to get fitness exercises by equipment et muscles targeted. 
Made in Node JS (Express).

## Use the API
1. Clone the repository.

```bash
git clone https://github.com/Chennelie/fitnessAPI.git
cd fitnessAPI
```

2. Install the dependencies.

```bash
npm install
```

3. Launch it! Enjoy. 
```bash
npm run server
```

<br/>

## API endpoints

### Get list of body parts
`GET /body/parts`

    curl -i -H 'Accept: application/json' http://localhost:5500/body/parts

### Get list of target muscles
`GET /body/muscles`

    curl -i -H 'Accept: application/json' http://localhost:5500/body/muscles

### Get list of equipments
`GET /equipments`

    curl -i -H 'Accept: application/json' http://localhost:5500/equipments

### Get list of exercises
`GET /exercises`

    curl -i -H 'Accept: application/json' http://localhost:5500/exercises

### Get list of exercises by name
`GET /exercises/:name`

    curl -i -H 'Accept: application/json' http://localhost:5500/exercises/name

### Get list of exercises by target muscles
`GET /exercises/target/:target`

    curl -i -H 'Accept: application/json' http://localhost:5500/exercises/target/target

### Get list of exercises by equipment
`GET /exercises/equipment/:equipment`

    curl -i -H 'Accept: application/json' http://localhost:5500/exercises/equipment/name

### Get list of exercises by body parts
`GET /exercises/bodyparts/:bodypart`

    curl -i -H 'Accept: application/json' http://localhost:5500/exercises/bodyparts/bodypart
