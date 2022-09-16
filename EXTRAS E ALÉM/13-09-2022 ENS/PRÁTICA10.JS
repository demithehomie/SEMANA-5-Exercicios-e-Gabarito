
		
		var brancos = 0, nulos = 0, total_votos = 0
		
		var porcentagem_candidato_a, porcentagem_candidato_b
		
		var porcentagem_brancos, porcentagem_nulos
		
		
		
		
			
			alert("Digite seu candidato ou tecle zero para encerrar\n\n")
			
			alert("  1 -> Candidato A\n")
			alert("  2 -> Candidato B\n")
			alert("  3 -> Branco\n")
			
			alert("\nQualquer número diferente de 0, 1, 2 e 3 anulará o seu voto\n")

            //altere a variável para alterar o switch - case
            var voto = Number(prompt("Escolha um candidato"))
			
			

			switch(voto)
			{
				case 0:
					alert("Votação encerrada!\n")
				break
				
				case 1: 
                    alert("Voto para o candidato A") // Soma um voto para o candidato A
			 	break
			 	
			 	case 2: 
                    alert("Voto para o candidato B") // Soma um voto para o candidado B
			 	break
			 	
			 	case 3: 
                    alert("Voto EM BRANCO") // Soma um voto em branco
			 	break
			 	
			 	default :
                    alert("Voto NULO") // Opção inválida. Soma um voto nulo
			}			 
	

	
