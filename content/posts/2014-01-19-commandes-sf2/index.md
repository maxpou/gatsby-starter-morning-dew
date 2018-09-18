---
title: Mémo - Commandes Symfony2
slug: "commandes-sf2"
description: "Liste des commandes console utilisées lors du développement d’un projet sous Symfony2"
date: 2015-06-12
tags: 
    - Symfony2
    - CLI
    - PHP
---

## Prérequis
Il faut que la console point sur le répertoire du projet.
La commande php app/console –s permet de ne plus écrire « php app/console ». Il est donc possible de créer un fichier .bat composé de la sorte :  
`cd c:\wamp\www\projet`  
`php app/console –s`

Note :

* Parfois les commandes ne marchent pas très bien. Repasser en console classique ou relancer le bat.

## Commandes Composer

### Rappel
Composer trouve les bibliothèques sur [packagelist.org](https://packagist.org).

### Mettre à jour composer
`php composer.phar self-update`

Note :

* il faut pointer vers le fichier composer.phar (utiliser la navigation si besoin est)
* Pour obtenir la version de composer : php composer.phar --version

### Mettre à jour les dépendances
`php ../composer.phar update`  
`php ../composer.phar update stof/doctrine-extensions-bundle`


Note :

* Mets à jour les dépendances du : composer.json
* La 2e ligne permet de mettre à jour qu’une seule dépendance
* Utiliser `--prefer-source` en cas de problèmes

## Commandes Symfony2

### Créer un Bundle
`php app/console generate:bundle`

Note :

* leNameSpace/nombundleBundle
* le suffixe Bundle est obligatoire
* utiliser le format yml
* écrire yes pour générer la structure

### Afficher les routes
`php app/console router:debug`

### Lister les commandes disponibles
`php app/console list`

### Nettoyer le cache
`php app/console cache:clear`

Note :

* Si l’environnement est en prod : `--env=prod`
* Préférez tout de même l'utilisation du plugin **[Clean de Grunt](https://www.npmjs.com/package/grunt-contrib-clean)**.

### Lister les services
* php app/console container:debug

## Commandes Doctrine

### Générer une entité
`php app/console generate:doctrine:entity`

Note :

* utiliser les annotations (par défaut)
* mettre yes quand pour générer le repository
* Field Type : String, text, date (date, datetime, time), integer (integer, smallint, bigint), decimal, float, boolean, array, object.

### Générer les getter/setter d’une entité
`php app/console doctrine:generate:entities AcmeStoreBundle:Product`

Note :

* il faut pointer vers le bundle

### Générer les tables de la BDD

`php app/console doctrine:schema:create `

Note : il faut que la base soit existante.

Mettre à jour la BDD

```
php app/console doctrine:schema:update --dump-sql  
php app/console doctrine:schema:update –-force
```

Note : `--dump-sql` pour voir le code sql et `--force` pour l’exécuter

### Générer un formulaire
`php app/console doctrine:generate:form AcmeStoreBundle:Product`

### Supprimer le contenu de la BDD (purge)
`php app/console doctrine:schema:drop --force`

### Générer le CRUD d’une entité (+vues, routes et form)
`php app/console generate:doctrine:crud`

Note :

* Pour sélectionner l’entity  : NamespacenomBundle : nomEntity
* Générer le write action : yes
* Format : yml
* Si l’entity a été modifiée, supprimer les répertoires/fichiers suivants :
  * Répertoire de vues : views/nomEntity
  * Form/nomEntityType.php
  * Controller : nomEntityController.php
  ou utiliser l’extension `--overwrite`
* [Information supplémentaires](http://symfony.com/doc/2.0/bundles/SensioGeneratorBundle/commands/generate_doctrine_crud.html)
* Penser à rajouter la route principale de l’entity dans le routing.yml du bundle (les 3 lignes de routage sont écrites dans la console)

Générer des entités à partir d'une base de données :  

```
php app/console doctrine:mapping:convert --from-database yml src/MyApplication/MyBundle/Resources/config/doctrine/metadata/orm  
php app/console doctrine:mapping:import "MyApplicationMyBundle" yml  
php app/console doctrine:generate:entities "MyApplicationMyBundle"
```

Note :

* Infos : http://wiki.nekland.fr/index.php/Symfony_2:_app/console
* Il faut obligatoirement une clé primaire dans la table


## FOSUserBundle

### Création d’utilisateurs

`php app/console fos:user:create`

### Promouvoir un utilisateur

`php app/console fos:user:promote testuser ROLE_ADMIN`
