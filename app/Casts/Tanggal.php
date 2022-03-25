<?php

namespace App\Casts;

use Carbon\Carbon;
use Illuminate\Contracts\Database\Eloquent\CastsAttributes;

class Tanggal implements CastsAttributes
{
    /**
     * Cast the given value.
     *
     * @param  \Illuminate\Database\Eloquent\Model  $model
     * @param  string  $key
     * @param  mixed  $value
     * @param  array  $attributes
     * @return mixed
     */
    public function get($model, $key, $value, $attributes)
    {
        setLocale(LC_ALL, 'IND');
        Carbon::setlocale('id');
        return Carbon::createFromDate($value)->isoFormat('D MMMM Y HH:mm');
    }

    /**
     * Prepare the given value for storage.
     *
     * @param  \Illuminate\Database\Eloquent\Model  $model
     * @param  string  $key
     * @param  mixed  $value
     * @param  array  $attributes
     * @return mixed
     */
    public function set($model, $key, $value, $attributes)
    {
        return $value;
    }

    public static function Cast($value)
    {
        return Carbon::createFromDate($value)->setTimezone('Asia/Jakarta')->isoFormat('D MMMM Y HH:mm');
    }

    public static function unCast($value)
    {

    }
}
