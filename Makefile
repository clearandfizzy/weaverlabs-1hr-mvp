BOX_REACTJS=react-app-weaver

start: ## Start the container
	docker-compose up -d

destroy: ## Stop the container
	docker-compose down --remove-orphans --volumes --rmi all

stop:## Stop the container and remove all associated resources
	docker-compose down

login: ## Access container shell
	docker-compose exec -it ${BOX_REACTJS} bash

dev:
	docker-compose exec ${BOX_REACTJS} bash -c "\
			npm run dev"
