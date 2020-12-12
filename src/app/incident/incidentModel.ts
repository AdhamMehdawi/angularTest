export interface IncidentViewModel {
    id: number;
    sendTo: number[];
    sendToSection: number[];
    incidentType: number;
    subject: string;
    description: string;
    incidentDate: string;
    parentIncidentId: number | null;
    latitude: number | null;
    longitude: number | null;
}