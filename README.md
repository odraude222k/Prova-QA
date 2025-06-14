# Prova-QA
Avaliação que aborda cypress(Teste UI) e postman(Teste API)
<br>
<br>
# Testes feitos no site: https://www.demoblaze.com/
<br>
<br>
# Teste de UI com cypress

Função utilizada para entrar no link do site:
```javascript
function entrar_site(){
  cy.visit('https://www.demoblaze.com/index.html')
}
```
<br>
<br>

Criar um usuário:
```javascript
it('criar um usuario', () => {
    entrar_site();
    cy.get('#signin2').click()
    cy.get('#sign-username').type('odr')
    cy.get('#sign-password').type('123456')
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
  })
```
<br>
<br>

Login com um usuário existente:
```javascript
it('entrar com usuario existente', () => {
    entrar_site();
    cy.get('#login2').click()
    cy.get('#loginusername').type('odr')
    cy.get('#loginpassword').type('123456')
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
  })
```
<br>
<br>

Login com um usuário não existente:
```javascript
it('entrar com usuario nao existente', () => {
    entrar_site();
    cy.get('#login2').click()
    cy.get('#loginusername').type('gatodovizinho')
    cy.get('#loginpassword').type('4321')
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
  })
```
<br>
<br>

Relatório dos testes: 
![image](https://github.com/user-attachments/assets/2b01f11b-8dda-4f84-a1a9-dc738bfa29a1)
<br>
<br>

# Teste de API com postman:
A coleção utilizada contém os seguintes testes:
1. Mostrar produtos
- Método: GET
- URL: https://api.demoblaze.com/entries
- O que ele faz: Retorna uma lista de produtos que estão disponiveis no site
- JSON retornado:
```json
{
    "Items": [
        {
            "cat": "phone",
            "desc": "The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420\n processor and it comes with 3GB of RAM. The phone packs 32GB of \ninternal storage cannot be expanded. ",
            "id": 1,
            "img": "imgs/galaxy_s6.jpg",
            "price": 360.0,
            "title": "Samsung galaxy s6"
        },
        {
            "cat": "phone",
            "desc": "The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM. ",
            "id": 2,
            "img": "imgs/Lumia_1520.jpg",
            "price": 820.0,
            "title": "Nokia lumia 1520"
        },
        {
            "cat": "phone",
            "desc": "The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM.",
            "id": 3,
            "img": "imgs/Nexus_6.jpg",
            "price": 650.0,
            "title": "Nexus 6"
        },
        {
            "cat": "phone",
            "desc": "The Samsung Galaxy S7 is powered by 1.6GHz octa-core it comes with 4GB \nof RAM. The phone packs 32GB of internal storage that can be expanded up\n to 200GB via a microSD card.",
            "id": 4,
            "img": "imgs/galaxy_s6.jpg",
            "price": 800.0,
            "title": "Samsung galaxy s7"
        },
        {
            "cat": "phone",
            "desc": "It comes with 1GB of RAM. The phone packs 16GB of internal storage \ncannot be expanded. As far as the cameras are concerned, the Apple \niPhone 6 packs a 8-megapixel primary camera on the rear and a \n1.2-megapixel front shooter for selfies.",
            "id": 5,
            "img": "imgs/iphone_6.jpg",
            "price": 790.0,
            "title": "Iphone 6 32gb"
        },
        {
            "cat": "phone",
            "desc": "Sony Xperia Z5 Dual smartphone was launched in September 2015. The phone\n comes with a 5.20-inch touchscreen display with a resolution of 1080 \npixels by 1920 pixels at a PPI of 424 pixels per inch.",
            "id": 6,
            "img": "imgs/xperia_z5.jpg",
            "price": 320.0,
            "title": "Sony xperia z5"
        },
        {
            "cat": "phone",
            "desc": "The HTC One M9 is powered by 1.5GHz octa-core Qualcomm Snapdragon 810 \nprocessor and it comes with 3GB of RAM. The phone packs 32GB of internal\n storage that can be expanded up to 128GB via a microSD card. ",
            "id": 7,
            "img": "imgs/HTC_M9.jpg",
            "price": 700.0,
            "title": "HTC One M9"
        },
        {
            "cat": "notebook",
            "desc": "Sony is so confident that the VAIO S is a superior ultraportable laptop \nthat the company proudly compares the notebook to Apple's 13-inch \nMacBook Pro. And in a lot of ways this notebook is better, thanks to a \nlighter weight.",
            "id": 8,
            "img": "imgs/sony_vaio_5.jpg",
            "price": 790.0,
            "title": "Sony vaio i5"
        },
        {
            "cat": "notebook",
            "desc": "REVIEW\n \nSony is so confident that the VAIO S is a superior \nultraportable laptop that the company proudly compares the notebook to \nApple's 13-inch MacBook Pro. And in a lot of ways this notebook is \nbetter, thanks to a lighter weight, higher-resolution display, more \nstorage space, and a Blu-ray drive. ",
            "id": 9,
            "img": "imgs/sony_vaio_5.jpg",
            "price": 790.0,
            "title": "Sony vaio i7\n"
        }
    ],
    "LastEvaluatedKey": {
        "id": "9"
    }
}
```
<br>
<br>

2. Mostar produto de determinada categoria
- Método: POST
- URL: https://api.demoblaze.com/bycat
- O que ele faz: Retorna uma lista de produtos que estão disponiveis em uma categoria
- Body:
```json
{
  "cat": "phone"
}
```
- JSON retornado: 
```json
{
    "Items": [
        {
            "cat": "phone",
            "desc": "The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420\n processor and it comes with 3GB of RAM. The phone packs 32GB of \ninternal storage cannot be expanded. ",
            "id": 1,
            "img": "imgs/galaxy_s6.jpg",
            "price": 360.0,
            "title": "Samsung galaxy s6"
        },
        {
            "cat": "phone",
            "desc": "The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM. ",
            "id": 2,
            "img": "imgs/Lumia_1520.jpg",
            "price": 820.0,
            "title": "Nokia lumia 1520"
        },
        {
            "cat": "phone",
            "desc": "The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM.",
            "id": 3,
            "img": "imgs/Nexus_6.jpg",
            "price": 650.0,
            "title": "Nexus 6"
        },
        {
            "cat": "phone",
            "desc": "The Samsung Galaxy S7 is powered by 1.6GHz octa-core it comes with 4GB \nof RAM. The phone packs 32GB of internal storage that can be expanded up\n to 200GB via a microSD card.",
            "id": 4,
            "img": "imgs/galaxy_s6.jpg",
            "price": 800.0,
            "title": "Samsung galaxy s7"
        },
        {
            "cat": "phone",
            "desc": "It comes with 1GB of RAM. The phone packs 16GB of internal storage \ncannot be expanded. As far as the cameras are concerned, the Apple \niPhone 6 packs a 8-megapixel primary camera on the rear and a \n1.2-megapixel front shooter for selfies.",
            "id": 5,
            "img": "imgs/iphone_6.jpg",
            "price": 790.0,
            "title": "Iphone 6 32gb"
        },
        {
            "cat": "phone",
            "desc": "Sony Xperia Z5 Dual smartphone was launched in September 2015. The phone\n comes with a 5.20-inch touchscreen display with a resolution of 1080 \npixels by 1920 pixels at a PPI of 424 pixels per inch.",
            "id": 6,
            "img": "imgs/xperia_z5.jpg",
            "price": 320.0,
            "title": "Sony xperia z5"
        },
        {
            "cat": "phone",
            "desc": "The HTC One M9 is powered by 1.5GHz octa-core Qualcomm Snapdragon 810 \nprocessor and it comes with 3GB of RAM. The phone packs 32GB of internal\n storage that can be expanded up to 128GB via a microSD card. ",
            "id": 7,
            "img": "imgs/HTC_M9.jpg",
            "price": 700.0,
            "title": "HTC One M9"
        }
    ]
}
```
3.Adicionar produto ao carrinho sem estar logado
- Método: POST
- URL: https://api.demoblaze.com/addtocart
- O que ele faz: Adiciona um produto ao carrinho de compras utilizando um cookie (sem logar)
- Body:
```json
{
  "id": "abc123-qualquercoisa",
  "cookie": "usuario_teste",
  "prod_id": 1,
  "flag": false
}
```
- JSON retorna 1, o que significa que ele foi adicionado ao carrinho
```json
1
```
<br>
<br>

Relatório dos testes de API:
![image](https://github.com/user-attachments/assets/64b96aed-528e-4346-8f15-220dcea1e65f)

  
