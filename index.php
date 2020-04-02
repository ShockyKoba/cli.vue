<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="custom.css">

    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>

    <title>Vue</title>
</head>
<body>
    <div id="app">
        <div class="wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1>{{title}}</h1>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti necessitatibus doloribus ullam illo eius reiciendis excepturi unde nostrum, iure aliquid vero officiis esse aut perferendis optio sunt. Dolorum, quas hic?Consectetur at placeat eum fugiat sapiente totam saepe aperiam? Suscipit ipsam laboriosam, quo officiis, voluptatem minus eum eligendi aperiam vero optio dolorem quasi necessitatibus autem ex dolores iste. Quasi, aut.
                        </p>

                        <table class="table mt-5 mb-0">
                            <thead>
                                <tr class="thead-dark">
                                    <th>#</th>
                                    <th>Fruit</th>
                                    <th>Brand</th>
                                    <th>Quantity</th>
                                    <th>On Sale</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(fruit, index) of fruits">
                                    <td>{{index}}</td>
                                    <td>{{fruit.name}}</td>
                                    <td>{{fruit.branch }}</td>
                                    <td>{{fruit.quantity}}</td>
                                    <td v-if="fruit.onsale == true">Yes</td>
                                    <td v-else>No</td>
                                </tr>
                            </tbody>
                        </table>
                        
                    </div>
                    <div class="col-12 mt-5">
                        <hr>
                        <h2 class="mt-5">New Fruit : </h2>
                        <form id="add-fruit" @submit="FormCheck" method="POST">
                            <div class="row">
                                <div class="col-12" v-if="newfruit_error.length">
                                    <b>Porfavor corrija los siguientes errores: </b>
                                    <ul>
                                        <li v-for="err of newfruit_error">
                                            {{err}}
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-12 col-sm-3">
                                    <label class="mb-3" for="fruit-name">
                                        Fruit: 
                                    </label>
                                </div>
                                <div class="col-12 col-md-9">
                                    <input type="text" id="fruit-name" v-model="newfruit_name">
                                </div>

                                <div class="col-12 col-sm-3">
                                    <label class="mb-3" for="fruit-branch">
                                        Branch:
                                    </label>
                                </div>
                                <div class="col-12 col-md-9">
                                    <input type="text" id="fruit-branch" v-model="newfruit_branch">
                                </div>

                                <div class="col-12 col-sm-3">
                                    <label class="mb-3" for="fruit-quantity">
                                        Quantity:
                                    </label>
                                </div>
                                <div class="col-12 col-md-9">
                                    <input type="text" id="fruit-quantity" v-model="newfruit_quantity">
                                </div>

                                <div class="col-12 col-sm-3">
                                    <label class="mb-3" for="fruit-onsale">
                                        On Sale: 
                                    </label>
                                </div>
                                <div class="col-12 col-md-9">
                                    <input type="checkbox" id="fruit-onsale" v-model="newfruit_onsale">
                                </div>

                                <div class="col-12 col-sm-3">
                                    <label class="mb-3">
                                        <input type="submit" class="btn btn-primary" value="Add Fruit">
                                    </label>
                                </div>
                            </div>
                        </form>

                        
                    </div>
                </div>
            </div>

        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>    
    <script src="js/master.js"></script>
</body>
</html>