import { Controller, Get, Param } from '@nestjs/common';

@Controller('cycleIng')
export class CycleIngController {
  @Get('informations')
  informations(): string[] {
    return ['Informations sur le cycle d’ingénieurs à la FST d’errachidia.'];
  }

  @Get('etudiants')
  etudiants(): string[] {
    return ['Informations sur quelques étudiants de la classe.'];
  }

  @Get('etudiants/:promotion')
  getEtudiantsByPromotion(@Param('promotion') promotion: string): string[] {
    let studentsList: string[];
    switch (promotion) {
      case '1':
        studentsList = ['Ahmed', 'Kamal', 'Mohamed'];
        break;
      case '2':
        studentsList = ['Abderrahmane', 'Aymen', 'Tahiri'];
        break;
      case '3':
        studentsList = ['Zakariya', 'Ali', 'Manal'];
        break;
      default:
        studentsList = ['Aucune promotion spécifiée.'];
    }

    return studentsList;
  }
}
