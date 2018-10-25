# haisau
comfy project manager

## User Stories

### Définitions

**Application** représente l'outil de gestion de projet développé ici.

**visiteur** représente une personne accédant au site internet sans avoir créé
de compte au préalable sur celui-ci.

**Utilisateur** représente une personne qui utilise l'application, pouvant être le
propriétaire d'un projet ou bien un développeur travaillant pour un
propriétaire.

**Développeur** représente un utilisateur de l'application participant à un projet
enregistré sur celle-ci. Le développeur a des des droits de gestion du
projet. Il n'y a a pas de différence de droits entre le créateur du projet et
les autres contributeurs.

**User story/stories (US)**  représente une ligne dans le backlog comprenant les
champs suivant : numéro d'identification, description, priorité et indice de
difficulté. Un ensemble de tâches sera associé au cours d'un sprint à cette US.

**Sprint** représente la composition d'un nom et d'un ensemble de tâches. Les
dates de début et fin du sprint sont définies automatiquement en fonction de la
date de début du projet et d'une période de constante de de deux semaines.

**Tâche**  représente la composition d'un identifiant, d'une brève description,
un ensemble de tests associés ainsi qu'un état (TODO, IN-PROGRESS, DONE/UNDONE).

**Test** représente la composition d'un nom, du résultat attendu au test ainsi
que l'adresse de la classe de test et la méthode associée au test.

**Bug** représente une anomalie dans le programme lié une tâche, et
pourra être différencié visuellement des autres tâches (couleur, préfixe au nom
ou autre).

### Liste
| Identifiant | Description | Priorité | Difficulté |
|-------------|-------------|----------|------------|
| 1 | En tant que **visiteur**, je veux créer un compte sur l'application en paramétrant mes identifiants de connexion tels que mon nom d'utilisateur et mon mot de passe. Un lien redirigeant vers la création d'un compte utilisateur sera présent dès la page d'accueil de l'application. Les identifiants ( *nom d'utilisateur*, *mot de passe* et *adresse mail*) seront à saisir dans un formulaire sur la dite page. |  | 1 |
| 4 | En tant que **développeur**, une fois connecté, je veux consulter la liste des projets auxquels je participe afin d'être au courant de l'avancement de chacun. Chaque projet sera listé dans l'ordre de leur création, et sera écrit de la forme ( *Nom du projet*, *Nom du sprint actuel*, *Tâches accomplies/Tâches assignées au sprint*, *Date de fin du sprint*).| | 1 |
| 2 | En tant que **développeur**, je veux créer un projet sur l'application afin de le gérer en renseignant un nom de projet. Sous la liste des projets en cours sera positionné un lien redirigeant vers une page comportant le formulaire de création de projet. Ce formulaire comportera uniquement le champ du nom du projet.| | 1 |
| 3 | En tant que **développeur**, je veux supprimer un projet que je gère afin de l'enlever de ma liste de projets. Cette option se trouvera sur le dashboard du projet à supprimer représenté par un lien différentiable des autres option (en rouge par exemple), avec une pop-up de demande de confirmation avant de supprimer définitivement le projet. | | 1 |
| 5 | En tant que **développeur**, je veux inviter des développeurs via leur nom d'utilisateur ou leur adresse email à mon projet afin qu'ils puissent travailler dessus. Une fois la création d'un projet validée, l'utilisateur sera redirigé vers le "dashboard" de son nouveau projet, qui contiendra un lien d'invitation à envoyer aux autres développeurs. En plus du lien d'invitation, un champ de recherche sera présent où l'utilisateur pourra y saisir le nom des développeurs à inviter pour leur envoyer directement le lien d'invitation sans passer par un client de messagerie externe. | | 1 |
| 6 | En tant que **développeur**, je veux répondre à une invitation de projet en cliquant sur un lien unique d'invitation afin de travailler ou non dessus. Ce lien redirigera vers une page où l'utilisateur invité devra se connecter si ce n'est pas déjà fait, et cliquer sur un bouton confirmant son invitation au projet. La page affichera le nom du projet à rejoindre. | | 1 |
| (doublon de 4 ?) 7 | En tant qu' **utilisateur**, je veux me connecter à l'application à l'aide de mes identifiants afin de consulter l'état de mes projets. | | 1 |
| 8 | En tant que **développeur**, je veux consulter le backlog d'un projet auquel je participe afin de connaître les user stories de ce dernier. A partir de n'importe quelle page de l'application, un lien vers le backlog sera présent sur une barre de tâches, redirigeant vers la page du backlog. Les user stories y seront référencées sous forme de liste avec leur identifiant, leur description, leur priorité et leur difficulté. | | 1 |
| 9 | En tant que **développeur**, je veux ajouter une user story au backlog afin de la rendre lisible par les développeurs. En bas de la liste des user stories, un lien redirigeant vers la page de création d'une user story sera présent. Cette page contiendra un formulaire où l'utilisateur devra y référencer un numéro d'identifiant (automatiquement défini au nombre de user stories déjà définies + 1), une description, une priorité et une difficulté. Si l'identifiant est déjà utilisé pour une autre user story, le champ en question sera surligné en rouge pour le signaler au développeur. | | 1 |
| 10 | En tant que **développeur**, je veux modifier une user story afin de la mettre à jour. Sur la liste des user stories, un bouton en forme de crayon redirigera vers la page d'édition des user stories. Cette page aura la même forme que celle de création d'user story, et sera pré-remplie de ses informations existantes. Les modifications apportées pourront être appliquées à l'aide d'un bouton labelisé "Appliquer" ou annulées à l'aide d'un autre bouton labelisé "Annuler". | | 1 |
| 11 | En tant que **développeur**, je veux proposer des user stories dans une "sandbox" afin de les rendre visibles par tous les utilisateurs sans impacter le projet. Les user stories seront réparties sur plusieurs onglets, à savoir "sandbox", "backlog" et "terminé". | | 1 |
| 12 | En tant que **développeur**, je veux accéder aux user stories proposées par mon équipe dans la "sandbox" afin de les inclure ou non dans le backlog du projet. Les user stories pourront être déplacées d'un onglet à un autre pour définir leur status par glissé-déposé. | | 1 |
| 13 | En tant que **développeur**, je veux consulter la liste des sprints afin de voir l'avancement du projet. | | 1 |
| 14 | En tant que **développeur**, je veux ajouter et modifier un sprint afin d'organiser l'avancement du projet. | | 1 |
| 15 | En tant que **développeur**, je veux uploader en fin de sprint la release du projet que je gère afin de la rendre téléchargeable par les utilisateurs. | | 1 |
| 16 | En tant qu' **utilisateur**, je veux télécharger la release d'un sprint d'un projet auquel je participe afin de pouvoir l'exécuter localement. | | 1 |
| 17 | En tant que **développeur**, je veux consulter la liste des tâches associées à un sprint donné afin d'être au courant de l'avancement du travail sur ce sprint. | | 1 |
| 18 | En tant que **développeur**, je veux ajouter une tâche à la liste de tâches liée à un sprint afin qu'elle soit listée avec les autres tâches et visible par les autres utilisateurs | | 1 |
| 19 | En tant que **développeur**, je veux modifier une tâche comprise dans le sprint courant afin de mettre à jour son statut. | | 1 |
| 20 | En tant que **développeur**, je veux ajouter des tests à une tâche, afin de vérifier son bon fonctionnement. | | 1 |
| 21 | En tant que **développeur**, je veux modifier l'état d'un test afin de mettre à jour son statut. | | 1 |
| 22 | En tant que **développeur**, je veux signaler à l'équipe un bug présent dans l'application afin de le corriger pour la suite. | | 1 |
| 23 | En tant que **développeur**, je veux observer le graphique du burn-down chart de mon sprint afin d'estimer la charge de travail restante en fonction du temps. | | 1 |
