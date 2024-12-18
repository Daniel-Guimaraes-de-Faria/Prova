import { Job, JobCreationAttributes } from "../models/job-models.js";

export class JobRepository {
  public async create(data: JobCreationAttributes): Promise<Job> {
    try {
      return await Job.create(data);
    } catch (error) {
      throw new Error(`Erro ao criar Job: ${(error as Error).message}`);
    }
  }

  public async findAll(p0?: { where: { contractId: number; paid: boolean; }; include: { model: number; as: string; }[]; }): Promise<Job[]> {
    try {
      return await Job.findAll();
    } catch (error) {
      throw new Error(`Erro ao encontrar Jobs: ${(error as Error).message}`);
    }
  }

  public async findById(id: number): Promise<Job | null> {
    try {
      return await Job.findByPk(id);
    } catch (error) {
      throw new Error(`Erro ao encontrar Job com ID ${id}: ${(error as Error).message}`);
    }
  }

  public async findAllPaidJobsByContract(contractId: number): Promise<Job[]> {
    try {
      return await Job.findAll({
        where: {
          contractId,
          paid: false, // Apenas jobs não pagos
        },
      });
    } catch (error) {
      throw new Error(`Erro ao buscar Jobs pagos para o contrato ${contractId}: ${(error as Error).message}`);
    }
  }

  public async update(id: number, data: Partial<JobCreationAttributes>): Promise<Job | null> {
    try {
      const job = await Job.findByPk(id);
      if (!job) return null;

      await job.update(data);
      return job;
    } catch (error) {
      throw new Error(`Erro ao atualizar Job com ID ${id}: ${(error as Error).message}`);
    }
  }

  public async delete(id: number): Promise<void> {
    try {
      const result = await Job.destroy({ where: { id } });
      if (result === 0) throw new Error(`Job com ID ${id} não encontrado`);
    } catch (error) {
      throw new Error(`Erro ao excluir Job com ID ${id}: ${(error as Error).message}`);
    }
  }
}
