import { Module, forwardRef } from '@nestjs/common';
import { Services } from './services';
import { AdapterModule } from '../adapter/adapter.module';

/**
 * Observação: forwardRef() é utilizado para resolver o problema quando um módulo “A”
 * depende do módulo “B” e o módulo “B” do módulo “A”, esse problema é
 * conhecido como dependência circular.
 */

@Module({
  imports: [forwardRef(() => AdapterModule)],
  providers: [...Services],
  exports: [...Services],
})
export class ApplicationModule {}
