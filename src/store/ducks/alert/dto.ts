export interface AlertDto {
  type: 'success' | 'info' | 'warning' | 'danger';
  items: string[];
}
