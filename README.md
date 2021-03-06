# quiprendquoi

## Installation

`npm install`

`npm run start`

## Article personnel

Web api : Ambient Light Events  

C'est une fonctionnalité toujours en développement, mais cette application permet de réagir face au changement de luminosité dans l'environnement de l'appareil grâce à un capteur.  
Ce capteur va envoyer une notification au navigateur, qui va déclencher un évènement _DeviceLightEvent_, ainsi on pourra accéder à la valeur de l'intensité lumineuse, et la modifier selon notre utilité.  
  
#### Voici un exemple de code tiré de MDN  

```
window.addEventListener('devicelight', function(event) {
    var html = document.getElementsByTagName('html')[0];

    if (event.value < 50) {
      html.classList.add('darklight');
      html.classList.remove('brightlight');
    } else {
      html.classList.add('brightlight');
      html.classList.remove('darklight');
    }
  });

```

Je trouve que c'est très intéressant, car on peut imaginer toute sorte de fonctionnalité à mettre en place, afin d'améliorer l'expérience des utilisateurs, l'accessibilité, ou le design de notre interface. 

Je n'ai pas mis en place cette application, parce que je ne voyais pas de cohérence avec ce projet. Néanmoins, je pense que ça vaut le coup de s'y pencher, et j'essayerais de l'implémenter dans mes projets futurs, si la compatibilité des navigateurs s'améliore. 

Ce qui me plairait le plus d'essayer avec cette web api, c'est le passage en mode dark ou light en fonction de la luminosité capté par le navigateur. Ça serait un bon moyen d'améliorer l'expérience des utilisateurs.   