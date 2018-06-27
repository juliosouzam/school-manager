<script src="{{ asset('vendor/js/jquery.js') }}" charset="utf-8"></script>
<script src="{{ asset('vendor/sweetalert2/sweetalert2.min.js') }}" charset="utf-8"></script>

<script type="text/javascript">

    @if (session('warning'))
        swal({
            type: 'warning',
            title: 'Wait a minute...',
            text: '{{ session('warning') }}',
        });
    @endif
    @if (session('error'))
        swal({
            type: 'error',
            title: 'Oops...',
            text: '{{ session('error') }}',
        });
    @endif

    @if ($errors->any())
        swal({
            type: 'error',
            title: 'Ops...',
            html: '@foreach ($errors->all() as $error){!! $error ."<br>" !!}@endforeach',
        });
    @endif

    @if (session('status'))
        const toast = swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 4000
        });

        toast({
            type: 'success',
            title: 'Sucesso!',
            text: '{{ session("status") }}'
        });
    @endif
</script>
